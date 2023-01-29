import { changeLoginOrRegister } from '@redux/reducers/loginOrRegister/loginRegister.reducer';

export class utilsService {
  static dispatch(result, pageReload, dispatch, setUser) {
    dispatch(changeLoginOrRegister({ loginTab: false }));
  }
}
