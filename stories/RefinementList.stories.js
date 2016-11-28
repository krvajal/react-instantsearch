import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {RefinementList} from '../packages/react-instantsearch/dom';
import {withKnobs, boolean, number, array} from '@kadira/storybook-addon-knobs';
import {WrapWithHits} from './util';

const stories = storiesOf('RefinementList', module);

stories.addDecorator(withKnobs);

stories.add('default', () =>
  <WrapWithHits linkedStoryGroup="RefinementList" hasPlayground={true}>
    <RefinementList attributeName="colors"/>
  </WrapWithHits>
).add('with selected item', () =>
  <WrapWithHits >
    <RefinementList
      attributeName="colors"
      defaultRefinement={['Black']}
    />
  </WrapWithHits>
).add('with show more', () =>
  <WrapWithHits >
    <RefinementList
      attributeName="colors"
      limitMin={2}
      limitMax={5}
      showMore={true}
    />
  </WrapWithHits>
).add('playground', () =>
  <WrapWithHits >
    <RefinementList
      attributeName="colors"
      defaultRefinement={array('defaultSelectedItem', ['Black', 'White'])}
      limitMin={number('limitMin', 10)}
      limitMax={number('limitMax', 20)}
      showMore={boolean('showMore', true)}
    />
  </WrapWithHits>
);
