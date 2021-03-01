import merge from 'lodash/merge';
import registry from 'assets/generated/pm/registry.homestead.json';
import registryKovan from 'assets/generated/pm/registry.kovan.json';
import registryStandalone from 'assets/generated/pm/registry.standalone.json';
import registryMoonbase from 'assets/generated/pm/registry.moonbase.json';
import homestead from '@/config/homestead.json';
import staging from '@/config/homestead.staging.json';
import kovan from '@/config/kovan.json';
import standalone from '@/config/standalone.json';
import moonbase from '@/config/moonbase.json';

import { clone } from '@/helpers/utils';

const configs = {
  production: { homestead, kovan, standalone, moonbase },
  staging: {
    homestead: merge(clone(homestead), staging),
    kovan,
    standalone,
    moonbase
  }
};
configs.production.homestead = merge(registry, configs.production.homestead);
configs.production.kovan = merge(registryKovan, configs.production.kovan);
configs.production.standalone = merge(
  registryStandalone,
  configs.production.standalone
);
configs.production.moonbase = merge(
  registryMoonbase,
  configs.production.moonbase
);

configs.staging.homestead = merge(registry, configs.staging.homestead);
configs.staging.kovan = merge(registryKovan, configs.staging.kovan);
configs.staging.standalone = merge(
  registryStandalone,
  configs.staging.standalone
);
configs.staging.moonbase = merge(registryMoonbase, configs.staging.moonbase);
const env = process.env.VUE_APP_ENV || 'production';
const network = process.env.VUE_APP_NETWORK || 'moonbase';

export default configs[env][network];
