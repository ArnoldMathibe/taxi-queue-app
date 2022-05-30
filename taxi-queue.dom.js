// write your DOM code here.


// DOM element references
const queueCountElem = document.querySelector('.passenger_queue_count');
const btn_join_queue = document.querySelector('.join_queue');
const btn_leave_queue = document.querySelector('.leave_queue');

const taxi_queue_countElem = document.querySelector('.taxi_queue_count');
const join_taxi_queue = document.querySelector('.join_taxi_queue');

const depart = document.querySelector('.depart')

// create Factory Function instance
const taxiQueue = TaxiQueue();

const joinPeopleQueue = TaxiQueue();
const leavePeopleQueue =  TaxiQueue();
const _joinTaxiQueue = TaxiQueue();
const departTaxi = TaxiQueue();

// DOM events
btn_join_queue.addEventListener('click', function(){
    joinPeopleQueue.joinQueue();
    queueCountElem.innerHTML = joinPeopleQueue.queueLength();
});

btn_leave_queue.addEventListener('click', function(){
    leavePeopleQueue.leaveQueue();
    queueCountElem.innerHTML = leavePeopleQueue.queueLength();
});

join_taxi_queue.addEventListener('click', function(){
    _joinTaxiQueue.joinTaxiQueue();
    taxi_queue_countElem.innerHTML = _joinTaxiQueue.taxiQueueLength();
});

depart.addEventListener('click', function(){
    departTaxi.taxiDepart();
    taxi_queue_countElem.innerHTML = departTaxi.queueLength();
});
