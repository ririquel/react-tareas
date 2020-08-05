import * as React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
    Text,
    Button,
    Divider,
    Layout,
    TopNavigation,
    TopNavigationAction,
    Icon,
} from '@ui-kitten/components';

export function DetailsScreen() {
    const navigation = useNavigation();
    // const [name, setName] = React.useState('');

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

    const BackAction = () => (
        <TopNavigationAction
            onPress={() => navigation.goBack()}
            icon={BackIcon}
        />
    );

    return (
        <SafeAreaView style={styles.contenedor}>
            <TopNavigation
                accessoryLeft={BackAction}
                alignment="center"
                title={'DETALLE'}
                // subtitle={todo.value}
            />
            <Divider />

            <Layout style={styles.layout} level="2">
                <Text>Home Screen</Text>
                <Button children="Volver" onPress={() => navigation.goBack()} />
            </Layout>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    layout: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingTop: '5%',
    },
});
