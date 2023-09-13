export class RealPrivate {
  private typePrivate: string = 'typePrivate';
  public typePublic: string = 'typePublic';
  #es6Private: string = 'es6Private';

  publicFunc() {}
  private privateFunc() {}
  #es6PrivateFunc() {}
}
