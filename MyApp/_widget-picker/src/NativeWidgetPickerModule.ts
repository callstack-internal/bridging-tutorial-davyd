import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  isRequestPinAppWidgetSupported(): boolean;

  requestPinAppWidget(widgetClassKey: string): Promise<{result: string}>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('WidgetPickerModule');
