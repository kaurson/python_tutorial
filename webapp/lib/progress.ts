"use client";

// LocalStorage keys
const CODE_KEY = (taskId: string) => `code:${taskId}`;
const DONE_KEY = (taskId: string) => `done:${taskId}`;

export function loadCode(taskId: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  return window.localStorage.getItem(CODE_KEY(taskId)) ?? fallback;
}

export function saveCode(taskId: string, code: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CODE_KEY(taskId), code);
}

export function setDone(taskId: string, done: boolean): void {
  if (typeof window === "undefined") return;
  if (done) window.localStorage.setItem(DONE_KEY(taskId), "1");
  else window.localStorage.removeItem(DONE_KEY(taskId));
}

export function isDone(taskId: string): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(DONE_KEY(taskId)) === "1";
}

export function getCompletedCountForChapter(taskIds: string[]): number {
  if (typeof window === "undefined") return 0;
  return taskIds.filter((id) => window.localStorage.getItem(DONE_KEY(id)) === "1").length;
}
