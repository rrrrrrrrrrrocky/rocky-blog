import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  console.log('🚀 ~ file: post-body.tsx:8 ~ PostBody ~ content', content);
  return (
    <div className="mx-auto max-w-2xl">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={`${markdownStyles.markdown} whitespace-pre-line`}
      />
    </div>
  );
};

export default PostBody;
