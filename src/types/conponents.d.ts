// 标题等级
type TitleLevelType = 1 | 2 | 3 | 4 | 5;

// 文本对齐方式
type TextAlignType = 'left' | 'center' | 'right';

// 排列方向: 水平 | 垂直
type Orientation = 'horizontal' | 'vertical';

interface HeaderOption {
  // 组件标题
  title: string;
  // 标题级别
  titleLevel: TitleLevelType;
  // 标题对齐方式
  titleAlignment: TextAlignType;
  // 问卷描述
  desc: string;
  // 描述对齐方式
  descAlignment: TextAlignType;
}

interface TitleOption {
  title: string;
  level: TitleLevelType;
  alignment: TextAlignType;
}

interface ParagraphOption {
  // 标题
  title: string;
  // 对齐方式
  alignment: TextAlignType;
}

// 每个输入表单的子组件都要额外接受的一些数据
interface BaseComponent {
  value?: any | any[];
  onChange?: (val: any) => void;
}

interface InputOption extends BaseComponent {
  // 标题
  title: string;
  // 输入框提示内容
  placeholder: string;
}

// CheckBox选项
interface CheckboxOption extends BaseComponent {
  // 组件标题
  title: string;
  // 是否被选中
  orientation: Orientation;
  list: {
    value: string;
    label: string;
    checked: boolean;
    disabled: boolean;
  }[];
}

// 一般选项
interface SelectOption {
  // 显示标签
  label: string;
  // 选项值
  value: string;
}

interface RadioOption extends BaseComponent {
  title: string;
  orientation: Orientation;
  options: SelectOption[];
}

interface TextareaOption extends BaseComponent {
  // 标题
  title: string;
  // 输入框提示内容
  placeholder: string;
}

interface SurveyComponent extends BaseComponent {
  fe_id: string;
  type: string;
  title: string;
  visible: boolean;
  locked: boolean;
  props: CheckboxOption &
    HeaderOption &
    TitleOption &
    InputOption &
    ParagraphOption &
    RadioOption &
    TextareaOption;
}

// 表单控制类型
interface SurveyData {
  id: string;
  title: string;
  desc: string;
  js: string;
  css: string;
  isDeleted: boolean;
  isPublished: boolean;
  componentList: SurveyComponent[];
}

interface InitProps {
  errno: number;
  msg?: string;
  data: SurveyData;
}
