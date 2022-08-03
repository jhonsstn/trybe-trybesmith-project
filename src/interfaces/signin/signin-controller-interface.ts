import ISignInData from './signin-data-interface';

export default interface ISignInControllerInterface {
  signIn(data: ISignInData): Promise<string>;
}
