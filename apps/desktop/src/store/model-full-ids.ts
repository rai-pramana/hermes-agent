import { atom } from 'nanostores'

import { persistBoolean, storedBoolean } from '@/lib/storage'

const KEY = 'hermes.desktop.model-full-ids.v1'

/** Show raw model ids (`openai-compatible-chat-…/muse-spark-1.3-…`) instead of
 *  prettified names in the model menu, the composer pill, and Edit Models.
 *  Off by default: long ids are noise until you're telling apart same-named
 *  models from different custom endpoints. */
export const $showFullModelIds = atom(storedBoolean(KEY, false))

$showFullModelIds.subscribe(on => persistBoolean(KEY, on))

export function setShowFullModelIds(on: boolean) {
  $showFullModelIds.set(on)
}
