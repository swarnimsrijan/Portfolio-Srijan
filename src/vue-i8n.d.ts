import 'vue-i18n';

declare module 'vue' {
  interface ComponentCustomProperties {
    /**
     * Translate the given key.
     * @param key The key to translate
     * @param options Optional options
     */
    $t: (key: string, options?: Record<string, unknown>) => string;

    /**
     * The locale manager instance
     */
    $i18n: typeof import('vue-i18n').VueI18n;
  }
}
