FROM node:18-alpine AS base

WORKDIR /app


# ---- Dependencies ----
# Install dependencies based on the preferred package manager
FROM base AS deps
# Copy package.json and lock file
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Install dependencies (choose one)


COPY prisma ./prisma  


# RUN yarn install --frozen-lockfile
RUN npm ci
# RUN pnpm install --frozen-lockfile

# ---- Builder ----
# Rebuild the source code only when needed
FROM base AS builder
ARG RESEND_API_KEY_BUILD
ENV RESEND_API_KEY=$RESEND_API_KEY_BUILD
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build
# RUN pnpm build

# ---- Runner ----
# Production image, copy only the artifacts we need from the builder stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# Set user and group for security (optional but recommended)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# --- Option 1: If NOT using `output: 'standalone'` ---
# Copy necessary files from the builder stage
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# --- Option 2: If using `output: 'standalone'` in next.config.js (Recommended) ---
# Copy the standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Copy the static assets (if needed, often served by standalone server)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Copy public assets (if you have them)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Expose the port the app runs on (default is 3000)
EXPOSE 3000

# Set the correct host (0.0.0.0 is important inside Docker)
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Command to run the app (uses the server.js in the standalone output)
CMD ["node", "server.js"]