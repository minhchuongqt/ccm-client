import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({ data }) =>
    <a className={'list-group-item list-group-item-action'}>
        <i className={'icon-issue ' + chooseType(data.issueType.name)}></i>
        {data.summary}</a>);

const chooseType = (type) => {
    switch (type) {
        case 'story':
            return 'fa fa-trello story-green';
            break;
        case 'bug':
            return 'fa fa-bug bug-red';
            break;
        case 'task':
            return 'success';
            break;
        case 'epic':
            return 'success';
            break;
        default:
            return '';
            break;
    }
}

const SortableList = SortableContainer(({ items }) => {
    return (
        <div className="list-group">
            {items.map((item, index) => (
                <SortableItem key={`item-${index}`} index={index} data={item} />
            ))}
        </div>
    );
});

class SortableComponent extends Component {
    state = {
        items: [
            {
                summary: 'As a developer, I can update story and task status',
                issueType: {
                    name: 'story'
                }
            },
            {
                summary: 'User can not update task status by dragging and dropping from column to column',
                issueType: {
                    name: 'bug'
                }
            },
            {
                summary: 'Code login page',
                issueType: {
                    name: 'story'
                }
            },
            {
                summary: 'Register page has a column can not update',
                issueType: {
                    name: 'bug'
                }
            }]
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    render() {
        return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
    }
}
export default SortableComponent;