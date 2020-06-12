import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery, useSubscription } from '@apollo/react-hooks';

const GET_STAT_PAGES = gql`
	query {
		pages {
			name
			count
		}
	}
`;
const SUB_STAT_PAGES = gql`
	subscription {
		subPage {
			name
			count
		}
	}
`;
const tags = {
	succes: {
		className: 'Por leer',
		text: 'is-success'
	},
	warning: {
		className: 'Leyendo',
		text: 'is-warning'
	},
	error: {
		className: 'Error',
		text: 'is-danger'
	}
};

export default function Pages() {
	const [ pages, setPages ] = useState({});
	const query = useQuery(GET_STAT_PAGES);
	const subscription = useSubscription(SUB_STAT_PAGES);
	useEffect(
		() => {
			if (!query.loading) {
				let list = {};
				(query.data.pages || []).map((page) => {
					list[page.name] = page;
				});
				setPages(list);
			}
		},
		[ query.data ]
	);
	useEffect(
		() => {
			if (!subscription.loading && !query.loading) {
				console.log('fgagaga');
				setPages({
					...pages,
					[subscription.data.subPage.name]: subscription.data.subPage
				});
			}
		},
		[ subscription.data ]
	);
	if (query.loading) return <p className="is-loading">Cargando..</p>;
	if (query.error) return <p className="is-loading">Error..</p>;
	return (
		<div>
			<h1 className="title">Paginas</h1>
			<div>
				{Object.keys(pages).map((pageIdx, idx) => {
					return <Tag page={pages[pageIdx]} key={`pages_${idx}`} />;
				})}
			</div>
		</div>
	);
}

const Tag = ({ page }) => {
	return (
		<div className="tags has-addons">
			<span className={`tag ${tags[page.name].text}`}>{tags[page.name].text}</span>
			<span className="tag is-black">{page.count}</span>
		</div>
	);
};
