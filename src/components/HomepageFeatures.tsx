/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: require('@site/static/img/poi-circle.png').default,
    description: (
      <>
        Poiyomi Shader has been designed to be easy to get started with, but versatile enough for even seasoned 3D artists.
      </>
    ),
  },
  {
    title: 'Modular',
    image: require('@site/static/img/poi-circle.png').default,
    description: (
      <>
        With Poiyomi 8.0 the new modular system allows for you to truly customize it to your needs, and even contribute your own modules.
      </>
    ),
  },
  {
    title: 'Powered by Thry Editor and Cibbi Modules',
    image: require('@site/static/img/poi-circle.png').default,
    description: (
      <>
        The way the Poiyomi shader works would not be possible without the incredible work from <Link
            className="text--secondary"
            to="https://twitter.com/thryrallo">
            Thryrallo
          </Link> and Cibbi.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
