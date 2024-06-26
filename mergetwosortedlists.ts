class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoSortedLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoSortedLists(list1, list2.next);
    return list2;
  }
}
function arrayToList(array: number[]): ListNode | null {
  if (array.length === 0) {
    return null;
  }

  const head = new ListNode(array[0]);
  let currentNode = head;

  for (let i = 1; i < array.length; i++) {
    currentNode.next = new ListNode(array[i]);
    currentNode = currentNode.next;
  }

  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let currentNode = head;

  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return result;
}

export function mergeTwoLists(arr1: number[], arr2: number[]): number[] {
  const list1 = arrayToList(arr1);
  const list2 = arrayToList(arr2);
  const mergedList = mergeTwoSortedLists(list1, list2);
  return listToArray(mergedList);
}
