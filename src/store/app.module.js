import {
    getModule,
    Module,
    VuexModule
} from "vuex-module-decorators";
import store from ".";

@Module({
    dynamic: true,
    store: store,
    namespaced: true,
    name: "appModule"
})

class AppModule extends VuexModule {

}
export const appModule = getModule(AppModule);