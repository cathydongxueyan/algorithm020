学习笔记
双向BFS搜索的思路：
广度优先搜索，既从A一层一层扩散，也从L一层一层扩散,当扩散的两层结点有重合的地方，就找到了最短路径，只需要将两边的和在一起。

双向BFS代码模版
void bfs（Node* root）
    map<int, int> visited;
    if (!root) return;

    queue<Node*> queueNode;
    queueNode.push(root);

    while (!queueNode.empty()) {
        Node* node = queueNode.top();
        queueNode.pop();
        if (visited.count(node -> val)) continue;
        visited[node -> val] = 1;

        for (int i = 0; i < node->children.size(); ++i) {
            queueNode.push(node -> children[i]);
        }
    }
    return;
}


