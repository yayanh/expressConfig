/**
 * Created by LiYN on 2017/1/2.
 */
import { Component, OnInit } from '@angular/core';

import { Channel } from './channel';

@Component({
    selector:'channel-Manage',
    template:`<table>
<th>名称</th>
<th>描述</th>
<tr *ngFor="let item of list">
<td> {{item.name}} </td>
<td> {{item.description}} </td>
</tr>
</table>
`,
})

export class ChannelComponent implements OnInit {
    list : Channel[] = [{_id:'1',name: 'news',description: 'This is News.'},
        {_id:'2',name: 'economy',description: 'This is economy.'},
        {_id:'3',name: 'sports',description: 'This is sports.'},
        {_id:'4',name: 'nature',description: 'This is nature.'}
    ];

    ngOnInit():void{
        this.getList();
    }

    getList():void{
    }


}