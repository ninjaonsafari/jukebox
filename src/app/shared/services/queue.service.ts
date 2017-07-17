import { Injectable } from '@angular/core';

import { QueueItem } from '../models/QueueItem';

@Injectable()
export class QueueService {
	private items: QueueItem[];

	getQueue(): Promise<QueueItem[]> {
		return Promise.resolve(this.items);
	}

	add(item: QueueItem): boolean {
		if (item) {
			if (!this.items) {
				this.items = [];
			}
			this.items.push(item);
			return true;
		}
		
		return false;
	}

	remove(item: QueueItem): boolean {
		if (item) {
			const index = this.items.indexOf(item);
			if (index > -1) {
				this.items.splice(index, 1);
				return true;
			}
		}

		return false;
	}

}