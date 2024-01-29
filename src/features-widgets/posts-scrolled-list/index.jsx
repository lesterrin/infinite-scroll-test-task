import React, {useState} from "react";
import {useFetchPostsDataQuery} from "../../shared/api";
import PostItem from "../../entities/post-item";import {
    AutoSizer,
    InfiniteLoader,
    List,
    WindowScroller
} from "react-virtualized";

import s from "./styles.module.css";

const PostsScrolledList = () => {

    const [currentPage, setcurrentPage] = useState(1);

    const {data, isFetching} = useFetchPostsDataQuery(currentPage);
    const postsData = data ?? [];

    function isRowLoaded({index}) {
        return !!postsData[index];
    }

    const handleNewPageLoad = () => {
        setcurrentPage(currentPage + 1)
    };

    const loadMoreRows = isFetching ? () => {} : handleNewPageLoad;

    const rowRenderer = ({key,index}) => <PostItem key={key}
                                                  id={postsData[index].id}
                                                  userId={postsData[index].userId}
                                                  title={postsData[index].title}
                                                  body={postsData[index].body}/>

    return (
        <div className={s.repositoriesWrapper}>
            <AutoSizer disableHeight={true}>
                {({width}) => (
                    <WindowScroller>
                        {({height, isScrolling, onChildScroll, scrollTop}) => (
                            <InfiniteLoader
                                isRowLoaded={isRowLoaded}
                                loadMoreRows={loadMoreRows}
                                rowCount={100} /*переделать на динамическое число строк*/
                            >
                                {({onRowsRendered, registerChild}) => (
                                    <List
                                        autoHeight
                                        onRowsRendered={onRowsRendered}
                                        ref={registerChild}
                                        height={height}
                                        isScrolling={isScrolling}
                                        onScroll={onChildScroll}
                                        rowCount={postsData.length}
                                        rowHeight={23} /*вынести в константу*/
                                        rowRenderer={rowRenderer}
                                        scrollTop={scrollTop}
                                        width={width}
                                    />
                                )}
                            </InfiniteLoader>
                        )}
                    </WindowScroller>
                )}
            </AutoSizer>
            {isFetching && <span>loading more repositories..</span>}
        </div>
    )
}

export default PostsScrolledList;