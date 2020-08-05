import * as React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
    Text,
    Button,
    TopNavigation,
    Divider,
    Layout,
    Icon,
    TopNavigationAction,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

import TaskList from '../components/TaskList';

export default function HomeScreen() {
    const navigation = useNavigation();
    // console.log(new Date().getTime());

    const AddIcon = (props: any) => <Icon {...props} name="plus-outline" />;

    const AddAction = () => (
        <TopNavigationAction
            onPress={() => navigation.navigate('Add')}
            icon={AddIcon}
        />
    );

    return (
        <SafeAreaView style={styles.contenedor}>
            <TopNavigation
                alignment="center"
                title={'HOME'}
                accessoryRight={AddAction}
                // subtitle={todo.value}
            />
            <Divider />
            <Layout style={styles.layout} level="2">
                {/* <Button
                    children="Ir a Detalles"
                    onPress={() => navigation.navigate('Details')}
                /> */}
                <TaskList />
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
