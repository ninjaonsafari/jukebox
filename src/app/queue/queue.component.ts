import { Component, OnInit } from '@angular/core';

import { QueueItem } from '../shared/models/QueueItem';
import { ServiceType } from '../shared/models/ServiceType';

import { QueueService } from '../shared/services/queue.service';

@Component({
	templateUrl: 'queue.component.html'
})

export class QueueComponent implements OnInit {
	items: QueueItem[];

	constructor(private queueService: QueueService) {
		
	}

	ngOnInit(): void {
		this.getQueue();
	}

	getQueue(): void {
  		this.queueService.getQueue().then(items => this.items = items);

	}
}
