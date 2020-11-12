export interface SuccessPageConfig {
    mdiIcon: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    btnPri: Btn;
    btnSub: Btn;
}
type Btn = {
    text: string;
    url: string;
}
