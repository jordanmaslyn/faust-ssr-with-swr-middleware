export function addCacheControlHeader(ctx, revalidateTime = 15, customValue) {
  ctx.res.setHeader(
    'Cache-Control',
    customValue
      ? customValue
      : `max-age=${revalidateTime} stale-while-revalidate stale-if-error`
  );
  return ctx;
}
