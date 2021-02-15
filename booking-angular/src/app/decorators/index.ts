// tslint:disable-next-line:typedef
export function AppDecorator(config: any) {
  console.log(config.message);

  // tslint:disable-next-line:only-arrow-functions
  return function(target: any) {
    console.log('Decorated class - ', target);

    target.prototype.hello = 'Hello From Decorator';
  };
}
