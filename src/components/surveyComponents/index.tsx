import SurveyCheckbox from './SurveyCheckbox';
import { editorComponentTypes } from '@/consts';
import SurveyHeader from './SurveyHeader';
import SurveyInput from './SurveyInput';
import SurveyParagraph from './SurveyParagraph';
import SurveyRadio from './SurveyRadio';
import SurveyTextarea from '@/components/surveyComponents/SurveyTextarea';
import SurveyTitle from '@/components/surveyComponents/SurveyTitle';

export const getComponent = (comp: SurveyComponent) => {
  const { type, visible, locked, props, onChange, value } = comp;

  if (!visible) return null;

  switch (type) {
    case editorComponentTypes.header:
      return (
        <SurveyHeader
          title={props.title}
          titleLevel={props.titleLevel}
          titleAlignment={props.titleAlignment}
          desc={props.desc}
          descAlignment={props.descAlignment}
        />
      );
    case editorComponentTypes.title:
      return <SurveyTitle title={props.title} level={props.level} alignment={props.alignment} />;
    case editorComponentTypes.paragraph:
      return <SurveyParagraph title={props.title} alignment={props.alignment} />;
    case editorComponentTypes.input:
      return (
        <SurveyInput
          title={props.title}
          placeholder={props.placeholder}
          value={value}
          onChange={onChange}
        />
      );
    case editorComponentTypes.checkbox:
      return (
        <SurveyCheckbox
          title={props.title}
          orientation={props.orientation}
          list={props.list}
          value={value}
          onChange={onChange}
        />
      );
    case editorComponentTypes.radio:
      return (
        <SurveyRadio
          title={props.title}
          orientation={props.orientation}
          options={props.options}
          value={value}
          onChange={onChange}
        />
      );
    case editorComponentTypes.textarea:
      return (
        <SurveyTextarea
          title={props.title}
          placeholder={props.placeholder}
          value={value}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
};
