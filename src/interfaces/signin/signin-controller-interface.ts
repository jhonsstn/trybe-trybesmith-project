import ISignInData from './signin-data-interface';

export default interface ISignInController {
  signIn(data: ISignInData): Promise<string>;
}
