import faker from '@faker-js/faker';
import { Dispatch } from '@reduxjs/toolkit';

import { IPost,  PostAction, PostFetchError } from './type'

const {
    date: { past },
    lorem: { paragraph, paragraphs, slug, words },
    random: { uuid },
} = faker;

type OptionsType = {
    id?: number,
    slug?: string
}

// function simulates post fetch
export const receivePosts = (count: number = 1, options: OptionsType = {}): Array<IPost> => {

    const posts = Array<IPost>(count)
        .fill({} as IPost)
        .map(() => {
            const summary = words();
            return {
                id: options.id || uuid().split('-')[0],
                user: words(),
                slug: options.slug || slug(),
                title: words(),
                summary,
                content: `${summary}\n${paragraphs()}`,
                date: past(),
                createdAt: past(),
                updatedAt: past(),
            } as IPost;
        });

    if (posts.length !== count)
        throw { message: "Fetch Unsuccesful" }

    return posts;
}
