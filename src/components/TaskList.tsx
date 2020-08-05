import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Card, Text, Button} from '@ui-kitten/components';
import {useSelector} from 'react-redux';

import {tasksSelector, Task, updateTask, deleteTask} from '../redux/tasksSlice';
import {useAppDispatch} from '../redux/configureStore';

const TaskList = () => {
    const dispatch = useAppDispatch();

    const tasks = useSelector(tasksSelector);
    // console.log(Object.values(tasks));

    const renderItemHeader = (headerProps: any, title: string) => (
        <View {...headerProps}>
            <Text category="h6">{title}</Text>
        </View>
    );
    const renderItemFooter = (task: Task) => (
        <View style={styles.row}>
            <Button children="Editar" appearance="ghost" />
            <Button
                children="Eliminar"
                appearance="ghost"
                onPress={() => {
                    console.log('Eliminando', task.title);
                    dispatch(deleteTask(task.id));
                }}
            />
            <Button
                children="Completar"
                status="success"
                appearance="ghost"
                onPress={() => {
                    dispatch(
                        updateTask({
                            id: task.id,
                            changes: {isCompleted: !task.isCompleted},
                        }),
                    );
                }}
            />
        </View>
    );

    const renderItem = (taskItem: {item: Task}) => (
        <Card
            style={styles.item}
            status={taskItem.item.isCompleted ? 'success' : 'warning'}
            header={(headerProps) =>
                renderItemHeader(headerProps, taskItem.item.title)
            }
            footer={() => renderItemFooter(taskItem.item)}>
            <Text>{taskItem.item.description}</Text>
        </Card>
    );
    return (
        <List
            style={styles.list}
            contentContainerStyle={styles.contentContainer}
            data={Object.values(tasks)}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        // maxHeight: 320,
    },
    contentContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    item: {
        marginVertical: 4,
    },
    row: {
        flexDirection: 'row',
    },
});

export default TaskList;
