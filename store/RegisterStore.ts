import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface FormData {
  email: string;
  verifycode: string;
  password: string;
}
interface FormItem {
  key: keyof FormData;
  val: string;
}

@Module({
  name: 'RegisterStore',
  stateFactory: true,
  namespaced: true,
})
export default class RegisterStore extends VuexModule {
  public formData = {
    email: '',
    verifycode: '',
    password: ''
  }
  public isFormValid = false;
  public isBtnLoading = false

  @Mutation
  public setFormData(formItem: FormItem) {
    this.formData[formItem.key] = formItem.val
  }

  @Mutation
  public setIsFormValid(val: boolean) {
    this.isFormValid = val
  }

  @Mutation
  public setIsBtnLoading(val: boolean) {
    this.isBtnLoading = val
  }
}
