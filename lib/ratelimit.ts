//npm install @upstash/ratelimit
//npm install @upstash/redis

import redis from "@/database/redis";
import { Ratelimit } from "@upstash/ratelimit"; 

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
   redis, 
  limiter: Ratelimit.fixedWindow(5, "1m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;