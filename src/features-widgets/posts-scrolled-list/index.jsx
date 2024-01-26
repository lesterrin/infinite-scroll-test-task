import React, {useEffect, useState} from "react";
import {useFetchPostsDataQuery} from "../../shared/api";
import PostItem from "../../entities/post-item";import {
    AutoSizer,
    InfiniteLoader,
    List,
    WindowScroller
} from "react-virtualized";

//import s from "./styles.module.css";

const PostsScrolledList = () => {

    const [currentPage, setcurrentPage] = useState(1);

    const {data, error, isFetching} = useFetchPostsDataQuery(currentPage);
    const postsData = data ?? [];

    console.log(postsData);

    /*useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;
            if (scrolledToBottom && !isFetching) {
                console.log("Fetching more data...");
                setcurrentPage(currentPage + 1);
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [currentPage, isFetching]);*/

    function isRowLoaded({index}) {
        return !!postsData[index];
    }

    const handleNewPageLoad = () => {
        setcurrentPage(currentPage + 1)
    };

    const loadMoreRows = isFetching ? () => {} : handleNewPageLoad;

    const rowRenderer = ({
                             key, // Unique key within array of rows
                             index, // Index of row within collection
                         }) => {
        return (
            <PostItem key={key}
                      id={postsData[index].id}
                      userId={postsData[index].userId}
                      title={postsData[index].title}
                      body={postsData[index].body}/>
        );
    };

    return (
        <div className="repositoriesWrapper">
            <AutoSizer disableHeight={true}>
                {({width}) => (
                    <WindowScroller>
                        {({height, isScrolling, onChildScroll, scrollTop}) => (
                            <InfiniteLoader
                                isRowLoaded={isRowLoaded}
                                loadMoreRows={loadMoreRows}
                                rowCount={100}
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
                                        rowHeight={42}
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
    /*const postsDataList = postsData.map((e: any, i: any) => <PostItem key={i}
                                                                      id={e.id}
                                                                      userId={e.userId}
                                                                      title={e.title}
                                                                      body={e.body}/>);
    return <div>
        {postsDataList}
        {isFetching && 'Идёт загрузка...'} {/!*Отследить загрузку страниц больше нормы*!/}

    </div>*/
}

export default PostsScrolledList;