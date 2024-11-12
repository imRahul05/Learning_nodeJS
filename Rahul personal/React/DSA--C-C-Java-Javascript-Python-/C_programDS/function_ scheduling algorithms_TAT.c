#include <stdio.h>

struct Process
{
    int pid;
    int burstTime;
    int priority;
    int remainingTime;
    int waitingTime;
    int turnaroundTime;
};

void calculateWaitingTime_FCFS(struct Process processes[], int n)
{
    processes[0].waitingTime = 0;

    for (int i = 1; i < n; i++)
    {
        processes[i].waitingTime = processes[i - 1].burstTime + processes[i - 1].waitingTime;
    }
}

void calculateTurnaroundTime_FCFS(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        processes[i].turnaroundTime = processes[i].burstTime + processes[i].waitingTime;
    }
}

void calculateWaitingTime_SJF(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        int minIndex = i;

        for (int j = i + 1; j < n; j++)
        {
            if (processes[j].burstTime < processes[minIndex].burstTime)
            {
                minIndex = j;
            }
        }

        struct Process temp = processes[minIndex];
        processes[minIndex] = processes[i];
        processes[i] = temp;

        processes[i].waitingTime = i > 0 ? processes[i - 1].burstTime + processes[i - 1].waitingTime : 0;
    }
}

void calculateTurnaroundTime_SJF(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        processes[i].turnaroundTime = processes[i].burstTime + processes[i].waitingTime;
    }
}

void calculateWaitingTime_RoundRobin(struct Process processes[], int n, int quantum)
{
    int completed = 0, currentTime = 0;

    while (completed < n)
    {
        for (int i = 0; i < n; i++)
        {
            if (processes[i].remainingTime > 0)
            {
                if (processes[i].remainingTime <= quantum)
                {
                    currentTime += processes[i].remainingTime;
                    processes[i].waitingTime = currentTime - processes[i].burstTime;
                    processes[i].remainingTime = 0;
                    completed++;
                }
                else
                {
                    currentTime += quantum;
                    processes[i].remainingTime -= quantum;
                }
            }
        }
    }
}

void calculateTurnaroundTime_RoundRobin(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        processes[i].turnaroundTime = processes[i].burstTime + processes[i].waitingTime;
    }
}

void calculateWaitingTime_Priority(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        int minIndex = i;

        for (int j = i + 1; j < n; j++)
        {
            if (processes[j].priority < processes[minIndex].priority)
            {
                minIndex = j;
            }
        }

        struct Process temp = processes[minIndex];
        processes[minIndex] = processes[i];
        processes[i] = temp;

        processes[i].waitingTime = i > 0 ? processes[i - 1].burstTime + processes[i - 1].waitingTime : 0;
    }
}

void calculateTurnaroundTime_Priority(struct Process processes[], int n)
{
    for (int i = 0; i < n; i++)
    {
        processes[i].turnaroundTime = processes[i].burstTime + processes[i].waitingTime;
    }
}

void calculateAvgTimes(struct Process processes[], int n, double *avgWaitingTime, double *avgTurnaroundTime)
{
    int totalWaitingTime = 0, totalTurnaroundTime = 0;

    for (int i = 0; i < n; i++)
    {
        totalWaitingTime += processes[i].waitingTime;
        totalTurnaroundTime += processes[i].turnaroundTime;
    }

    *avgWaitingTime = (double)totalWaitingTime / n;
    *avgTurnaroundTime = (double)totalTurnaroundTime / n;
}

void displayProcesses(struct Process processes[], int n)
{
    printf("Process\tBurst Time\tPriority\tWaiting Time\tTurnaround Time\n");

    for (int i = 0; i < n; i++)
    {
        printf("%d\t%d\t\t%d\t\t%d\t\t%d\n", processes[i].pid, processes[i].burstTime,
               processes[i].priority, processes[i].waitingTime, processes[i].turnaroundTime);
    }
}

int main()
{
    int n, quantum;
    printf("Enter the number of processes: ");
    scanf("%d", &n);

    struct Process processes[n];

    for (int i = 0; i < n; i++)
    {
        printf("\nProcess %d\n", i + 1);
        processes[i].pid = i + 1;
        printf("Enter burst time: ");
        scanf("%d", &processes[i].burstTime);
        printf("Enter priority: ");
        scanf("%d", &processes[i].priority);
        processes[i].remainingTime = processes[i].burstTime;
    }

    // FCFS Scheduling
    calculateWaitingTime_FCFS(processes, n);
    calculateTurnaroundTime_FCFS(processes, n);

    double avgWaitingTime_FCFS, avgTurnaroundTime_FCFS;
    calculateAvgTimes(processes, n, &avgWaitingTime_FCFS, &avgTurnaroundTime_FCFS);

    printf("\nFCFS Scheduling:\n");
    displayProcesses(processes, n);
    printf("\nAverage Waiting Time: %.2lf", avgWaitingTime_FCFS);
    printf("\nAverage Turnaround Time: %.2lf\n", avgTurnaroundTime_FCFS);

    // SJF Scheduling
    calculateWaitingTime_SJF(processes, n);
    calculateTurnaroundTime_SJF(processes, n);

    double avgWaitingTime_SJF, avgTurnaroundTime_SJF;
    calculateAvgTimes(processes, n, &avgWaitingTime_SJF, &avgTurnaroundTime_SJF);

    printf("\nSJF Scheduling:\n");
    displayProcesses(processes, n);
    printf("\nAverage Waiting Time: %.2lf", avgWaitingTime_SJF);
    printf("\nAverage Turnaround Time: %.2lf\n", avgTurnaroundTime_SJF);

    // Round Robin Scheduling
    printf("\nEnter the time quantum for Round Robin: ");
    scanf("%d", &quantum);

    calculateWaitingTime_RoundRobin(processes, n, quantum);
    calculateTurnaroundTime_RoundRobin(processes, n);

    double avgWaitingTime_RR, avgTurnaroundTime_RR;
    calculateAvgTimes(processes, n, &avgWaitingTime_RR, &avgTurnaroundTime_RR);

    printf("\nRound Robin Scheduling (Quantum = %d):\n", quantum);
    displayProcesses(processes, n);
    printf("\nAverage Waiting Time: %.2lf", avgWaitingTime_RR);
    printf("\nAverage Turnaround Time: %.2lf\n", avgTurnaroundTime_RR);

    // Priority Scheduling
    calculateWaitingTime_Priority(processes, n);
    calculateTurnaroundTime_Priority(processes, n);

    double avgWaitingTime_Priority, avgTurnaroundTime_Priority;
    calculateAvgTimes(processes, n, &avgWaitingTime_Priority, &avgTurnaroundTime_Priority);

    printf("\nPriority Scheduling:\n");
    displayProcesses(processes, n);
    printf("\nAverage Waiting Time: %.2lf", avgWaitingTime_Priority);
    printf("\nAverage Turnaround Time: %.2lf\n", avgTurnaroundTime_Priority);

    return 0;
}
