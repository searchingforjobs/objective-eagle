import React from 'react';
import {RingProgress, Text, SimpleGrid, Paper, Center, Group, Button} from '@mantine/core';
import { ArrowUpRight, ArrowDownRight } from 'tabler-icons-react';

interface StatsRingProps {
    data: {
        label: string;
        stats: string;
        progress: number;
        color: string;
        icon: 'up' | 'down';
        buttonLabel: string;
        buttonColorFrom: string;
        buttonColorTo: string;
    }[];
}

const icons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
};

export function Stats({ data }: StatsRingProps) {
    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
            <Group grow direction={ 'column' }>
                <Paper withBorder radius="md" p="xs" key={stat.label}>
                    <Group>
                        <RingProgress
                            size={80}
                            roundCaps
                            thickness={8}
                            sections={[{ value: stat.progress, color: stat.color }]}
                            label={
                                <Center>
                                    <Icon size={22} />
                                </Center>
                            }
                        />
                        <div>
                            <Text color="dimmed" size="xs" transform="uppercase" weight={500}>
                                {stat.label}
                            </Text>
                            <Text weight={700} sx={{ fontSize: '28px' }}>
                                {stat.stats}
                            </Text>
                        </div>
                    </Group>
                </Paper>
                <Button variant="gradient" gradient={{ from: stat.buttonColorFrom, to: stat.buttonColorTo, deg: 105 }}>{ stat.buttonLabel }</Button>
            </Group>
        );
    });
    return (
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {stats}
        </SimpleGrid>
    );
}