import { Component } from '@angular/core';

import { QueueItem } from '../shared/models/QueueItem';
import { ServiceType } from '../shared/models/ServiceType';

import { QueueService } from '../shared/services/queue.service';

@Component({
	templateUrl: 'search.component.html',
})

export class SearchComponent {
	term: string;

	serviceTypes = ServiceType;

	constructor(private queueService: QueueService) {
		
	}

	addToQueue() {
		const queueItem = new QueueItem();
		queueItem.title = 'Queue Item';
		queueItem.type = ServiceType.SoundCloud;
		this.queueService.add(queueItem);
	}
}
