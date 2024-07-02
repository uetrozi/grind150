import { TreeNode, invertTree } from "./invertbinarytree";

function treeToArray(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result.filter((value): value is number => value !== null);
}

test("invert binary tree", () => {
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
  );

  const expected = new TreeNode(
    4,
    new TreeNode(7, new TreeNode(9), new TreeNode(6)),
    new TreeNode(2, new TreeNode(3), new TreeNode(1))
  );

  const output = invertTree(root);
  expect(treeToArray(output)).toEqual(treeToArray(expected));
});

test("invert height 1 binary tree", () => {
  const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

  const expected = new TreeNode(2, new TreeNode(3), new TreeNode(1));

  const output = invertTree(root);
  expect(treeToArray(output)).toEqual(treeToArray(expected));
});

test("invert an empty tree", () => {
  const root = null;
  const expected = null;
  const output = invertTree(root);
  expect(output).toBe(expected);
});

test("invert single node tree", () => {
  const root = new TreeNode(1);

  const expected = new TreeNode(1);

  const output = invertTree(root);
  expect(treeToArray(output)).toEqual(treeToArray(expected));
});

test("invert tree with only left children", () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));

  const expected = new TreeNode(
    1,
    null,
    new TreeNode(2, null, new TreeNode(3))
  );

  const output = invertTree(root);
  expect(treeToArray(output)).toEqual(treeToArray(expected));
});

test("invert tree with only right children", () => {
  const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));

  const expected = new TreeNode(1, new TreeNode(2, new TreeNode(3)));

  const output = invertTree(root);
  expect(treeToArray(output)).toEqual(treeToArray(expected));
});
