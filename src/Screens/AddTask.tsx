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
    Input,
} from '@ui-kitten/components';
import {useAppDispatch} from '../redux/configureStore';
import {addTask} from '../redux/tasksSlice';

export function AddTaskScreen() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [task, setTask] = React.useState({
        id: new Date().getTime(),
        title: '',
        description: '',
        isCompleted: false,
    });

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
                title={'Añadir Tarea'}
                // subtitle={todo.value}
            />
            <Divider />

            <Layout style={styles.layout} level="2">
                {/* <Text>{JSON.stringify(task, null, 4)}</Text> */}
                <Input
                    label="Título"
                    value={task.title}
                    onChangeText={(value) =>
                        setTask((prevState) => ({...prevState, title: value}))
                    }
                    placeholder=""
                />
                <Input
                    label="Descripción"
                    value={task.description}
                    onChangeText={(value) =>
                        setTask((prevState) => ({
                            ...prevState,
                            description: value,
                        }))
                    }
                    placeholder=""
                />
                {
                    //Agregar imput de descripcion
                }
                <Button
                    children="Agregar"
                    onPress={() => {
                        dispatch(addTask(task));
                        navigation.goBack();
                    }}
                />
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
