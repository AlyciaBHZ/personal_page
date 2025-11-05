import { Eye } from './Eye';

export function Eyes() {
  return (
    <div className="relative shrink-0" data-name="eyes">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Eye isRightEye={false} />
        <Eye isRightEye={true} />
      </div>
    </div>
  );
}


