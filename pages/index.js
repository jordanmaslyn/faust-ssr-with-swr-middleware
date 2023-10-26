import { getWordPressProps, WordPressTemplate } from '@faustwp/core';
import { addCacheControlHeader } from 'utilities/ssr-swr';

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export function getServerSideProps(ctx) {
  return getWordPressProps({ ctx: addCacheControlHeader(ctx) });
}
