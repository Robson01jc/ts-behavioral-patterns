import { GenericService } from './service/GenericService';
import { ProcessContext } from './service/ProcessContext';
import { ServicesCatalog } from './service/ServicesCatalog';

const run = (func: () => void): void => {
  try {
    func();
  } catch (err: any) {
    console.error(err.message);
  }
};

export const chainApp = {
  main(): void {
    const ctx = new ProcessContext();

    run(() => {
      ctx.put('email', 'anotherUser@email.com');
      ctx.put('password', '1234');
      const response = GenericService.run(ServicesCatalog.saveUserProcess, ctx);
      console.log(response);
    });

    run(() => {
      ctx.reset();
      ctx.put('email', 'anotherUser@email.com');
      ctx.put('password', '1234');
      ctx.put('name', 'Another User');
      const response = GenericService.run(ServicesCatalog.saveUserProcess, ctx);
      console.log(response);
    });

    run(() => {
      ctx.reset();
      ctx.put('email', 'user@email.com');
      ctx.put('password', '123456');
      const response = GenericService.run(ServicesCatalog.loginProcess, ctx);
      console.log(response);
    });

    run(() => {
      ctx.reset();
      ctx.put('token', 'USER@EMAIL.COM');
      const response = GenericService.run(ServicesCatalog.getUsersProcess, ctx);
      console.log(response);
    });

    run(() => {
      ctx.reset();
      ctx.put('token', 'Invalid token');
      const response = GenericService.run(ServicesCatalog.getUsersProcess, ctx);
      console.log(response);
    });
  },
};
