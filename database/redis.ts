//used for caching the data and can be used for api handling

import { Redis } from "@upstash/redis";
import config from "@/lib/config";

// setup for rate limiting for account sign up to prevent ddos attacks

const redis=new Redis({
        url: config.env.upstash.redisUrl,
        token: config.env.upstash.redisToken
})

export default redis;