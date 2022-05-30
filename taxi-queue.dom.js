// write your DOM code here.


// DOM element references
const queueCountElem = document.querySelector('.passenger_queue_count');
const join_Queue = document.querySelector('.join_queue');
const leave_queue = document.querySelector('.leave_queue');

const taxi_queue_countElem = document.querySelector('.taxi_queue_count');
const join_taxi_queue = document.querySelector('.join_taxi_queue');

const depart = document.querySelector('.depart')

// create Factory Function instance
const taxiQueue = TaxiQueue();

const joinPeopleQueue = TaxiQueue();

// DOM events
join_Queue.addEventListener('click', function(){
    joinPeopleQueue.joinQueue();
    queueCountElem.innerHTML = joinPeopleQueue.queueLength();
})
