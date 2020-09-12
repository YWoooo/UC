import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface FormData {
  email: string;
  password: string;
}
interface FormItem {
  key: keyof FormData;
  val: string;
}

@Module({
  name: 'LoginStore',
  stateFactory: true,
  namespaced: true,
})
export default class LoginStore extends VuexModule {
  public formData = {
    email: '',
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
