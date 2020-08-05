import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Navigator from './Navegador';
import {persistor, store} from './redux/configureStore';

export default () => (
    <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ApplicationProvider {...eva} theme={eva.light}>
                    <Navigator />
                </ApplicationProvider>
            </PersistGate>
        </Provider>
    </SafeAreaProvider>
);
