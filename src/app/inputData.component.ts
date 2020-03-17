import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'inputdata',
	template:
		`
			<div class=inputWrap>
				<input 
					(input)="valueChange.emit($event.target.value)" 
					class=base 
					placeholder="Your City Name" 
					readonly={{readonly}}
					value={{valueBase}}

					/>
			</div>
		`,
})

export class InputDataComponent {
	@Input() readonly: boolean;
	@Input() valueBase: string = "";

	@Output() valueChange: EventEmitter<string>;

	constructor(){
		this.valueChange = new EventEmitter();
	}
	
}