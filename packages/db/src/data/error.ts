const ERROR_CODES = {
  INSUFFICIENT_PERMISSIONS: 1000,
  VALIDATION_ERROR: 1001,
  INVALID_CREDENTIALS_ERROR: 1002,
  PRISMA_ERROR: 2000,
};

export type ValidationIssue = {
  expected: string;
  received: string;
  validation: string;
  code: string;
  path: string[];
  message: string;
};

export type GenericError = {
  title: keyof typeof ERROR_CODES;
  code: typeof ERROR_CODES[keyof typeof ERROR_CODES];
  message: string;
  statusCode: number;
  payload: {
    issues: ValidationIssue[];
    [key: string]: any;
  };
};

export type HandlerReturnError = {
  success: false;
  error: GenericError;
};

export function createError<T extends keyof typeof ERROR_CODES>(errorKind: T) {
  return (
    params: Partial<Pick<GenericError, "message" | "payload" | "statusCode">>
  ): HandlerReturnError => {
    const { message, payload, statusCode = 200 } = params;
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: { code: ERROR_CODES[errorKind] } as any };
    }
    return {
      success: false,
      error: {
        statusCode,
        code: ERROR_CODES[errorKind],
        title: errorKind,
        message:
          typeof message === "string" ? message : JSON.stringify(message),
        payload,
      },
    };
  };
}

export const prismaError = createError("PRISMA_ERROR");
export const insufficientPermissionsError = createError(
  "INSUFFICIENT_PERMISSIONS"
);
export const validationError = createError("VALIDATION_ERROR");
export const invalidCredentialsError = createError("INVALID_CREDENTIALS_ERROR");
