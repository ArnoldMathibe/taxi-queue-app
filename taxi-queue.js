function TaxiQueue(_peopleCount, _taxi) {
	let peopleCount = 0;
	let taxiQueue = 0;

	if (_peopleCount) {
		peopleCount = _peopleCount;
	}
	if (_taxi) {
		taxiQueue = _taxi;
	}

	function joinQueue() {
		return peopleCount++;
	}

	function leaveQueue() {
		if (peopleCount > 0) {
			return peopleCount--;
		}
	}

	function joinTaxiQueue() {
		return taxiQueue++;
	}

	function queueLength() {
		return peopleCount;
	}

	function taxiQueueLength() {
		return taxiQueue;
	}

	function taxiDepart(){
		if (peopleCount > 12 && taxiQueue > 0) {
			return taxiQueue = (taxiQueue-- && peopleCount - 12);
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}