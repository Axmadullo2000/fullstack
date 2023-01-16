import React from 'react'
import { useSelector } from 'react-redux'
export const UpdateArticle = () => {
	const { detailArticles } = useSelector(state => state.article)
	console.log(detailArticles)
	return <div>updateArticle</div>
}
