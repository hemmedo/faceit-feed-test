import { Post } from './models';

export function toPost(m: Record<string, any>): Post {
  return {
    id: m.id,
    text: m.text,
    owner: m.owner,
  };
}
