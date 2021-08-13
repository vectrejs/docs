import { defineComponent, VNode } from 'vue';
import Prism from 'prismjs';

export default defineComponent({
  props: {
    code: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'markup',
    },
  },
  setup(props, { slots, attrs }) {
    const defaultSlot = (slots.default && slots.default()) || [];
    const code = props.code || (defaultSlot.length && defaultSlot[0].children?.toString()) || '';
    const inline = props.inline;
    const language = props.language;
    const prismLanguage = Prism.languages[language];
    const className = `language-${language}`;

    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(
        `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`,
      );
    }
    return (): VNode => {
      const highlightedCode = Prism.highlight(code, prismLanguage, language);

      if (inline) {
        return <code class={className} innerHTML={highlightedCode} />;
      }

      return (
        <pre class={[attrs.class, className]} {...attrs}>
          <code class={[attrs.class, className]} {...attrs} innerHTML={highlightedCode} />
        </pre>
      );
    };
  },
});
